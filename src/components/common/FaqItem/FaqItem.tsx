import React from 'react';
import Collapsible from 'react-collapsible';

type Props = {
  title: string;
  children: React.ReactNode;
};

const FaqItem = ({ title, children }: Props) => (
  <Collapsible
    className="faq"
    openedClassName="faq active"
    triggerClassName="faq-title"
    triggerOpenedClassName="faq-title active"
    triggerTagName="button"
    contentInnerClassName="faq-content"
    trigger={title}
    transitionTime={300}
    easing="ease-out"
  >
    {children}
  </Collapsible>
);

export default FaqItem;
