const ColorHash = require('color-hash');
const colorHash = new ColorHash();

const Dependency = require('webpack/lib/Dependency');

class LogDependency extends Dependency {

  constructor(module) {
    super();
    this.module = module;
  }
};

LogDependency.Template = class {
  apply(dep, source) {

    const before = `;console.group('${source._source._name}');`
    const after = `;console.groupEnd();`
    const _size = source.size()

    console.log('apply plugin')
    source.insert(0, before)

    source.replace(_size, _size, after)

  }
};


module.exports = class LogPlugin {

  constructor (opts) {
    this.options = {
      expression: /loggggaw/ig,
      ...opts
    }
    this.plugin = { name: 'LogPlugin' }
    
  }

  doLog (module) {

    if (!module._source) return
    let _val = module._source.source(),
        _name = module.resource;

    const filedColor = colorHash.hex(module._buildHash)

    // 判断是否需要加入
    if (this.options.expression.test(_val)) {
      module.addDependency(new LogDependency(module));
    }

    let oldSize=_val.length;
    _val = _val.replace(
      this.options.expression,
      '123456789'
    )

    return _val

  }

  apply (compiler) {

    compiler.hooks.compilation.tap(this.plugin, (compilation) => {

      // 注册自定义依赖模板
      compilation.dependencyTemplates.set(
        LogDependency,
        new LogDependency.Template()
      );

      // modlue解析完毕钩子
      compilation.hooks.succeedModule.tap(this.plugin, module => {
        // 修改模块的代码
        if(module._source&&module._source._value){
          module._source._value = this.doLog(module)
        }
        
      })
    })

  }
}