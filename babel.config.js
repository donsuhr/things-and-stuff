const presets = ['@babel/preset-typescript'];
const plugins = [];

if (process.env.NODE_ENV === 'test') {
    presets.push([
        '@babel/preset-env',
        {
            targets: {
                node: 'current',
            },
        },
    ]);
} else {
    presets.push([
        '@babel/preset-env',
        {
            modules: false,
            targets: 'last 1 Chrome versions',
        },
    ]);
}

module.exports = { presets, plugins };
