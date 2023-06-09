//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

// This plugin is needed until this PR is merged.
// https://github.com/vercel/next.js/pull/23185
const { withLess } = require('@nrwl/next/plugins/with-less');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const x = withNx(nextConfig);
module.exports = withLess(x);
