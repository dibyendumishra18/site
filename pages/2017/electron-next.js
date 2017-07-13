// Syntax
import bash from 'highlight.js/lib/languages/bash'

// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import {H2} from '../../components/heading'
import { UL, LI } from '../../components/list'
import { InlineCode } from '../../components/code'

export default () =>
  <Post>
    <Meta id="electron-next" hasCover />

    <P>
      Since the first release of Electron{' '}
      <Link href="https://github.com/electron/electron/releases/tag/v0.1.0">
        in 2013
      </Link>{' '}
      we{`'`}ve come a very
      long way: With the high goal of conquering native, the web{`'`}s
      ambassadors (you and me) developed various useful projects
      for all kinds of use cases.
    </P>

    <P>
      Nowadays, many of the daily tasks previously handled by native apps are
      now done by software that
      runs on top of Electron: Editing code (<Link href="https://atom.io">
        Atom
      </Link>), sending and
      receiving messages (<Link href="https://www.whatsapp.com/download">
        WhatsApp
      </Link>, <Link href="https://slack.com/downloads">Slack</Link>) or
      emails (<Link href="https://www.nylas.com/nylas-mail/">Nylas Mail</Link>)
      and even
      complex things like running commands (<Link href="https://hyper.is">
        Hyper
      </Link>).
    </P>

    <P>
      To sum this up, I don{`'`}t think I have to tell you anymore how important
      it is and how big its impact on our industry
      is today. And yet, it{`'`}s{' '}
      <Link href="https://npm-stat.com/charts.html?package=electron">
        still growing
      </Link>!
    </P>

    <P>Of course, these achievements weren{`'`}t completely free of charge:</P>

    <P>
      We{`'`}ve spent hours
      convincing our fellow coworkers that a rewrite was worth it. We held
      conferences and spread
      the word across the whole globe, so that all of us may have the ability to
      make convert their app ideas intro reality.
    </P>

    <P>
      In addition,{' '}
      <Link href="https://github.com/electron/electron/graphs/contributors">
        some of us
      </Link>{' '}
      even contributed their
      own spare time and spent it reporting issues, fixing bugs and making
      Electron better!
    </P>

    <P>Sure, all of this has been very difficult and time consuming.</P>

    <P>
      But <Link href="https://www.youtube.com/watch?v=oRojY4uZNI8&t=15s">
        let{`'`}s not rest
      </Link> now!
    </P>

    <P>
      There{`'`}s still a long way ahead of us: More operating systems and
      devices are waiting for us! We{`'`}re barely halfway there. So much more
      to discover!
    </P>

    <H2>The Idea</H2>

    <P>
      But enough of the 👏 cheering 👏 now. With the above in mind, I{`'`}d like
      to introduce you to a new concept of building Electron
      apps:
    </P>

    <P>
      So far, we{`'`}ve either been using vanilla JavaScript or some
      sort of custom Webpack/Babel/Gulp setup to handle building
      the{' '}
      <Link href="https://github.com/electron/electron/blob/3decb5eb28ffacc587c5b8fe201483a8b65b4138/docs/tutorial/quick-start.md#renderer-process">
        renderer process
      </Link>.
    </P>

    <P>
      At <Link href="https://zeit.co">ZEIT</Link>, we{`'`}ve gathered a lot of
      experience with this topic
      in the past and discovered a much more efficient and more straightforward
      way to handle this:{' '}
      <Link href="https://github.com/zeit/next.js">Next.js</Link>!
    </P>

    <P>
      Yes, I{`'`}m serious. It{`'`}s not just very good for sites and web apps,
      but it also makes creating Electron apps as easy as you{`'`}ve never
      seen it before. That{`'`}s because it allows us - as app developers - to
      abstract most of the complex
      development environment away into a tiny toolbet.
    </P>

    <P>Once implemented, <Link href="https://github.com/zeit/next.js">Next.js</Link> will take care of:</P>

    <UL>
      <LI shallow>Handling the <Link href="https://github.com/zeit/next.js#routing">routing</Link> and <Link href="https://github.com/zeit/next.js#prefetching-pages">prefetching</Link> of pre-defined pages</LI>
      <LI shallow>Transpiling, bundling and minifying your code</LI>
      <LI shallow>Live-reloading all <InlineCode>BrowserWindow</InlineCode> instances that are pointing to Next.js pages</LI>
      <LI shallow>Automatically <Link href="https://github.com/zeit/next.js#automatic-code-splitting">splitting</Link> your code</LI>
      <LI shallow>Built-in support for <Link href="https://github.com/zeit/next.js#css">styling</Link> components and pages using <Link href="https://github.com/zeit/styled-jsx">styled-jsx</Link></LI>
    </UL>

    <P>In order for Next.js bundles to fit perfectly into how we're building
    Electron apps (and to make deploying easier), we also released <Link href="https://zeit.co/blog/next3-preview">a feature</Link> that
    lets you export static files for the use in the production version of your app.</P>

    <P>And that's <Link href="https://zeit.co/blog/next">not even all</Link> yet!</P>

    <P>So why can't we have these wonderful features
    inside an Electron app without a complicated configuration setup? Well... Starting today, it's actually possible! 🎉</P>
  </Post>
