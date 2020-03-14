---
id: react-weaknesses
title: React Weaknesses
author: Fanny Vieira
author_url: https://github.com/fanny
author_image_url: https://i.imgur.com/QMznITd.jpg
tags: [react, redux, discuss]
---

In the last years, React has placed a lot of effort in improve many of it apis to be more easier and friendly to new comers. <!--truncate--> This happened with hooks, for example one of the motivations was because using classes components is so confused and complex for beginners, beyond the fact that until this point react had problems with reuse stateful logic. Although this exists, one really topic controversial and commented is about the state management in React, and the resistance generated in many developers to learn or use redux, because it is necessary to change a lot of files, and know many abstractions, yeah, we have the `<Context>` alternative, but do you think that this API is enough to complex things or global state management? or is it better to resort to redux?


My point is that I miss a more structured solution on this topic in React, Last days I was reading reddit and one of the maintaners of redux, it argued that with the library we would be able to have consistent architectural patterns, debugging capabilities and etc. And I agree with him, probably using the Context API and hooks, we'll suffering a lit bit to achieve these things.
