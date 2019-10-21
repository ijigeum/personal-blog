const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-js": hot(preferDefault(require("/home/rich/Desktop/HUGO/ghost-admin/personal-blog/src/templates/tag.js"))),
  "component---src-templates-author-js": hot(preferDefault(require("/home/rich/Desktop/HUGO/ghost-admin/personal-blog/src/templates/author.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/home/rich/Desktop/HUGO/ghost-admin/personal-blog/src/templates/post.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/home/rich/Desktop/HUGO/ghost-admin/personal-blog/src/templates/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/rich/Desktop/HUGO/ghost-admin/personal-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/rich/Desktop/HUGO/ghost-admin/personal-blog/src/pages/404.js")))
}

