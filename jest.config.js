module.exports = {
  // 测试文件的后缀名字, 如果不写后缀, 先当作 .js 文件, 再当作 .vue 文件
  moduleFileExtensions: ['js', 'vue'],
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  // 哪些模块下的内容不需要转换
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  // 目录映射
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
