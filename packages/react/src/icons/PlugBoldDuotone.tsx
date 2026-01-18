import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlugBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlugBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.94 10.6c.88-.83 2.26-.81 3.12.05l5.3 5.3c.85.85.88 2.23.05 3.11l-.14.16-.03.02a6 6 0 1 1-8.46-8.5zm1.7 1.46a.25.25 0 0 0-.34 0l-.13.11a4 4 0 0 0 5.66 5.66l.12-.13c.09-.1.08-.25-.01-.35z" clipRule="evenodd" />
        <path d="M21.3 1.3a1 1 0 0 1 1.4 1.4L19.9 5.53a6 6 0 0 0-1.41-1.4z" />
        <path fill="currentColor" d="M4.1 18.48a6 6 0 0 0 1.42 1.41l-2.81 2.82a1 1 0 0 1-1.42-1.42z" />
        <path fill="currentColor" fillRule="evenodd" d="M10.76 4.76a6 6 0 1 1 8.46 8.5l-.16.15c-.88.83-2.26.8-3.12-.06l-.44-.44-.8.8a1 1 0 1 1-1.4-1.42l.79-.79-1.6-1.59-.78.8a1 1 0 1 1-1.42-1.42l.8-.79-.44-.44a2.25 2.25 0 0 1-.06-3.12l.14-.16zm7.07 1.41a4 4 0 0 0-5.66 0l-.12.13c-.09.1-.08.25.01.35l4.14 4.14.01.01 1.14 1.14c.1.1.25.1.35 0l.13-.11a4 4 0 0 0 0-5.66" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugBoldDuotone.displayName = 'PlugBoldDuotone';

export { PlugBoldDuotone };
export type { PlugBoldDuotoneProps };
