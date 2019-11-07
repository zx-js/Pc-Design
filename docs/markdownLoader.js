var markdownIt = require('markdown-it');

module.exports = function(src) {
    var options = {
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        typographer: true,
    };
    var md = markdownIt(options);
    var render = md.render(src);
    return `<template><div class="markdown">${render}</div></template>`;
};
