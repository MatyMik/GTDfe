const config = {
    schemaFile: 'src/api/openapi.json',
    apiFile: './src/store/emptyApi.ts',
    apiImport: 'emptySplitApi',
    outputFile: './src/store/gtdApi.ts',
    exportName: 'gtdApi',
    hooks: true,
}

export default config