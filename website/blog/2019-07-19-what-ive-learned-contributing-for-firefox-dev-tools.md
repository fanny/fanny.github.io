---
id: what-ive-learned-contributing-for-firefox-dev-tools
title: What i've learned contributing for firefox dev tools
author: Fanny Vieira
author_title: Enterprise Engineer Intern @ Facebook
author_url: https://github.com/fanny
author_image_url:  https://i.imgur.com/QMznITd.jpg
tags: [opensource,firefox,mozilla,contributors]
---

It's very common when we join in a community, we feel that don't be capable, or that don't have knowledge enough to fix a problem. Mainly, when it is Firefox, that is a gigantic community, i also passed through this, and i will tell you how i got over. <!--truncate-->

# Don't be afraid

![](https://media.giphy.com/media/AFTWK5Qo22V2g/giphy.gif)


Beginning to read and try to understand the project, naturally, there were many snippets that I didn't understand, but there were anothers, that is very similar to my university projects, see [this component](https://github.com/mozilla/gecko-dev/blob/master/devtools/client/webconsole/components/FilterBar.js) of dev tools project:
```js
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const { Component, createFactory } = require("devtools/client/shared/vendor/react");
const dom = require("devtools/client/shared/vendor/react-dom-factories");
const { connect } = require("devtools/client/shared/vendor/react-redux");
const { getAllFilters } = require("devtools/client/webconsole/selectors/filters");
const { getFilteredMessagesCount } = require("devtools/client/webconsole/selectors/messages");
const { getAllUi } = require("devtools/client/webconsole/selectors/ui");
const actions = require("devtools/client/webconsole/actions/index");
const { l10n } = require("devtools/client/webconsole/utils/messages");
const { PluralForm } = require("devtools/shared/plural-form");
const {
  FILTERS,
  FILTERBAR_DISPLAY_MODES,
} = require("../constants");

const FilterButton = require("devtools/client/webconsole/components/FilterButton");
const FilterCheckbox = require("devtools/client/webconsole/components/FilterCheckbox");
const SearchBox = createFactory(require("devtools/client/shared/components/SearchBox"));

loader.lazyRequireGetter(this, "PropTypes", "devtools/client/shared/vendor/react-prop-types");

class FilterBar extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      filter: PropTypes.object.isRequired,
      persistLogs: PropTypes.bool.isRequired,
      hidePersistLogsCheckbox: PropTypes.bool.isRequired,
      showContentMessages: PropTypes.bool.isRequired,
      hideShowContentMessagesCheckbox: PropTypes.bool.isRequired,
      filteredMessagesCount: PropTypes.object.isRequired,
      closeButtonVisible: PropTypes.bool,
      closeSplitConsole: PropTypes.func,
      displayMode:
        PropTypes.oneOf([...Object.values(FILTERBAR_DISPLAY_MODES)]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      hidePersistLogsCheckbox: false,
      hideShowContentMessagesCheckbox: true,
    };
  }

  constructor(props) {
    super(props);

    this.onClickMessagesClear = this.onClickMessagesClear.bind(this);
    this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
    this.onChangePersistToggle = this.onChangePersistToggle.bind(this);
    this.onChangeShowContent = this.onChangeShowContent.bind(this);
    this.renderFiltersConfigBar = this.renderFiltersConfigBar.bind(this);

    this.maybeUpdateLayout = this.maybeUpdateLayout.bind(this);
    this.resizeObserver = new ResizeObserver(this.maybeUpdateLayout);
  }

  componentDidMount() {
    this.filterInputMinWidth = 150;
    try {
      const filterInput = this.wrapperNode.querySelector(".devtools-searchbox");
      this.filterInputMinWidth =
        Number(window.getComputedStyle(filterInput)["min-width"].replace("px", ""));
    } catch (e) {
      // If the min-width of the filter input isn't set, or is set in a different unit
      // than px.
      console.error("min-width of the filter input couldn't be retrieved.", e);
    }

    this.maybeUpdateLayout();
    this.resizeObserver.observe(this.wrapperNode);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      filter,
      persistLogs,
      showContentMessages,
      filteredMessagesCount,
      closeButtonVisible,
      displayMode,
    } = this.props;

    // ...
    if (
      JSON.stringify(nextProps.filteredMessagesCount) !==
        JSON.stringify(filteredMessagesCount)
    ) {
      return true;
    }

    if (nextProps.closeButtonVisible != closeButtonVisible) {
      return true;
    }

    if (nextProps.displayMode != displayMode) {
      return true;
    }

    return false;
  }

  /**
   * Update the boolean state that informs where the filter buttons should be rendered.
   * If the filter buttons are rendered inline with the filter input and the filter
   * input width is reduced below a threshold, the filter buttons are rendered on a new
   * row. When the filter buttons are on a separate row and the filter input grows
   * wide enough to display the filter buttons without dropping below the threshold,
   * the filter buttons are rendered inline.
   */
  maybeUpdateLayout() {
    const {
      dispatch,
      displayMode,
    } = this.props;

    const filterInput = this.wrapperNode.querySelector(".devtools-searchbox");
    const {width: filterInputWidth} = filterInput.getBoundingClientRect();

    if (displayMode === FILTERBAR_DISPLAY_MODES.WIDE) {
      if (filterInputWidth <= this.filterInputMinWidth) {
        dispatch(actions.filterBarDisplayModeSet(FILTERBAR_DISPLAY_MODES.NARROW));
      }

      return;
    }

    if (displayMode === FILTERBAR_DISPLAY_MODES.NARROW) {
      const filterButtonsToolbar =
        this.wrapperNode.querySelector(".webconsole-filterbar-secondary");

      const buttonMargin = 5;
      const filterButtonsToolbarWidth = Array.from(filterButtonsToolbar.children).reduce(
        (width, el) => width + el.getBoundingClientRect().width + buttonMargin, 0);

      if (filterInputWidth - this.filterInputMinWidth > filterButtonsToolbarWidth) {
        dispatch(actions.filterBarDisplayModeSet(FILTERBAR_DISPLAY_MODES.WIDE));
      }
    }
  }
```

So, i thought, "Ok, when i don't understand something in a project that i developed with my university colleagues, i try understand, searching or asking to them, why i dont make the same here?"

Initially, i was very ashamed of asking to someone(who knows me, knows that i very ashamed, fortunately i'm working on this in last days haha), but as i became aware of developer interactions with the community, I saw how much each one is always willing to teach how each thing is done and help you deal with some problem.

And so I started to get involved, I went to download the project and set up, and i had many problems, the majority i got resolve looking the issues reported and resolved by community, but  there was one, that i can't remember, that i couldn't. I had to send a message in firefox chat and in few minutes, a developer answered me and i got fix the problem(Thanks to [Nicholas Chevobbe](https://twitter.com/nicolaschevobbe))

And it was so that i finally got set up the project in my machine, then, don't be afraid of ask for help, when you feel very lost in a thing, surely, there will be someone willing to help you.

An **important** part that I forgot to mention is that in order to set things up on my machine, I first read [this documentation](https://docs.firefox-dev.tools/). And i follow the instructions, it's very complete both explains the configuration and their workflow, code patterns etc

# First things first
![](https://media.giphy.com/media/7zYMmNDKi8SYDAbxLB/giphy.gif)

Once i had set up the project, i was very excited to start developing, after all, i was almost achieving realize my dream of contribute to firefox!!

One more time, i was a little confuse, then what should i do? I asked to the guy who helped me, as i could start to contribute. Who has a little experience with open source, knows that the majority of communities have some issues labeled as "Good First Issue", so what he recommended for me was look two links:
1. [CodeTribute Good First Issues](https://codetribute.mozilla.org/projects/devtools?tag%3Dgood-first-bug)
2. [Firefox Dev Tools Bugs](https://bugs.firefox-dev.tools/?easy&tool=all)

Then, i read one problem, [this](https://bugzilla.mozilla.org/show_bug.cgi?id=1421342), I thought, "HERE IS MY FIRST PROBLEM!", I, as well as the mentor, we underestimate the problem, when reopening the discussion, the maintaners realized that it was not so simple, I had to talk to the network team, change some files that are not so intuitive for beginners, which made me look for others problems

The second that i found was [this](https://bugzilla.mozilla.org/show_bug.cgi?id=1457111). In short, when we had a link tag, we needed to show an option to copy the link from that tag. Previously, we needed to copy the entire tag and manually extract the link. If you read the topic, I initially understood the problem in a different way, i wanted to use regex, because I did not know it included an html tag. But then a mentor went there and explained what really should be done, and he even suggested a tool to debug and better visualize what I was doing and that starts the next topic.

(As you noticed, i fail many times, but fortunately always there was someone who helped me, so do not be afraid to try !!)

# Use tools to your favor & debug
![](https://media.giphy.com/media/102h4wsmCG2s12/giphy.gif)

As i said before, the documentation explains very well each module, for example, when i needed modified some thing in console, i went directly in [webconsole directory](https://github.com/mozilla/gecko-dev/tree/master/devtools/client/webconsole) and i tried to find a code relationed with the issue description.

To help me debug the code of the browser, i used the [tool](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox) quoted earlier, it's very important that you use it, because we are accustomed to do to analyze a web development project looking at the browser console, but what happens if we are developing the browser console?

We can not see through the console, the code of the browser console itself, so we use it, and it is so indispensable in our development.

Also, to complement the documentation studies, I found [this link] (https://developer.mozilla.org/en-US/docs/Tools) is quite interesting, because it gives an explanation of some internal things of these tools .

Basically I analyzed the code using this browser tool box tool, and looking at the doc along with that link, and sometimes when I did not really find the link of the thing I needed, I would ask someone else, then once again DO NOT FEEL FEAR!!!

Once you've done that, you'll already have the knowledge to submit your first pr (or what they call it, your patch) in the documentation, explain everything right, how you assign it to a reviewer, how to commit. It's worth mentioning that they use a different git system, it's the mercurial one, but it's very similar to the way things are done, so if you know git, you'll be able to unroll.

One of the coolest parts when I submitted my first pr and it was accepted was to be recognized in the chat, I was so happy, so happy that I even took print of that moment:

![Captura de tela_2019-03-23_11-04-14](https://user-images.githubusercontent.com/14113480/57582306-536d4880-7499-11e9-9c24-14d69c7d9477.png)

In addition, almost every week, they post on their blog the update of the week, including the work of contributors, and my name appeared on the page, twice, people, I was very happy !!!!!!!!!!!!!!!!

[Week 1](https://blog.nightly.mozilla.org/2019/03/15/these-weeks-in-firefox-issue-55/)
[Week 2](https://blog.nightly.mozilla.org/2019/04/05/these-weeks-in-firefox-issue-56/)

So once again, do not be afraid to contribute to the firefox community, I overcame my fear and shame, and I felt very accomplished, and not only that, be sure that you will be very well recognized for your work, the community is very receptive and welcoming, so I leave here my experience and suggestion as an excellent community to contribute.
