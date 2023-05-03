import React from 'react';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';

type Props = {
  note: { excerpt: string; title: string; url: string };
};

const ShareLinks = ({ note }: Props): JSX.Element => {
  const { excerpt, title, url } = note;

  return (
    <span>
      <RedditShareButton url={url} title={title}>
        <RedditIcon
          round={false}
          size={24}
          iconFillColor={'black'}
          bgStyle={{ fillOpacity: '0' }}
        />
      </RedditShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon
          round={false}
          size={24}
          iconFillColor={'black'}
          bgStyle={{ fillOpacity: '0' }}
        />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={excerpt}>
        <FacebookIcon
          round={false}
          size={24}
          iconFillColor={'black'}
          bgStyle={{ fillOpacity: '0' }}
        />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} summary={excerpt}>
        <LinkedinIcon
          round={false}
          size={24}
          iconFillColor={'black'}
          bgStyle={{ fillOpacity: '0' }}
        />
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon
          round={false}
          size={24}
          iconFillColor={'black'}
          bgStyle={{ fillOpacity: '0' }}
        />
      </TelegramShareButton>
    </span>
  );
};

export default ShareLinks;
