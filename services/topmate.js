const base64Img = require('base64-img'),
  axios = require('axios'),
  logo = base64Img.base64Sync('./public/images/topmate.png'),

  // default config for badge
  {
    DEFAULT_USERNAME,
    DEFAULT_PROFILE_URL,
    TOPMATE_BASE_URL,
    BADGE_OPTIONS,
  } = require('../config'),
  { COLOR_A, COLOR_B, DEFAULT_STYLE, BASE_URL } = BADGE_OPTIONS;

	(getProfileUrl = (username) => {
		if (!username) return DEFAULT_PROFILE_URL;

		const profileURL = `${TOPMATE_BASE_URL}/${username}`;
		return profileURL;
	}),

  (downloadBadge = async (badgeURL) => {
    const response = await axios.get(badgeURL),
      svgXml = response.data;

    return svgXml;
  });

module.exports = {
  /**
   *
   * Generate a badge for your Topmate profile
   * Sample profile: https://topmate.io/vinitshahdeo
   *
   * @param {string} username - topmate username like `vinitshahdeo`
   * @param {style} style - possible values are `flat`, `flat-square`, `plastic`, `for-the-badge`, `social`
   * @returns Topmate README Badge
   */
  generateBadge: (username = DEFAULT_USERNAME, style = DEFAULT_STYLE) => {
    const profileUrl = getProfileUrl(username),
      qs = `link=${profileUrl}&logo=${logo}&colorA=${COLOR_A}&colorB=${COLOR_B}&style=${style}`;
    badgeURL = `${BASE_URL}-${username}-critical?${qs}`;

    return downloadBadge(badgeURL);
  },
};
