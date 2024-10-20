/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      '^.+\\.ts$': ['ts-jest', {
          tsconfig: 'tsconfig.json', // Especifica tu archivo de configuración de TypeScript
          isolatedModules: true, // Activa el modo de módulos aislados
        }],
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  // Otras configuraciones que puedas necesitar...
};