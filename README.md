# image-dev-loader

Replace image url with relative path to source file

## Usage
```javascript
{
    test: /\.(png|jpe?g|gif|svg|ico)$/,
    use: [
        {
            loader: 'image-dev-loader',
            options: {
                context: 'context/path/',
                prefix: '', // prefix for url if needed, f.e. https://somehost
            },
        },
    ],
},
```

`context` is the __from__ path for path.relative calculation. For most use cases it is same as `context` field from webpack config
