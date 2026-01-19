import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlugBoldProps = Omit<IconBaseProps, 'children'>;

const PlugBold = memo(
  forwardRef<SVGSVGElement, PlugBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="plug-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.94 10.6c.88-.83 2.26-.81 3.12.05l5.3 5.3c.85.85.87 2.23.05 3.11l-.14.16-.03.02a6 6 0 0 1-7.72.65l-2.81 2.82a1 1 0 0 1-1.42-1.42l2.82-2.81a6 6 0 0 1 .65-7.72l.02-.03zm1.7 1.46a.25.25 0 0 0-.34 0l-.13.11a4 4 0 1 0 5.66 5.66l.12-.13c.09-.1.08-.25-.01-.35zM21.3 1.3a1 1 0 0 1 1.4 1.4L19.9 5.53a6 6 0 0 1-.67 7.75l-.16.14c-.88.83-2.26.8-3.12-.06l-.44-.44-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-1.6-1.59-.78.8a1 1 0 0 1-1.42-1.42l.8-.79-.44-.44a2.25 2.25 0 0 1-.06-3.12l.14-.16.03-.02a6 6 0 0 1 7.71-.65zm-3.47 4.87a4 4 0 0 0-5.66 0l-.12.13c-.09.1-.08.25.01.35l4.14 4.14.01.01 1.14 1.14c.1.1.25.1.35 0l.13-.11a4 4 0 0 0 0-5.66" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugBold.displayName = 'PlugBold';

// Triple export pattern (lucide-react style)
export { PlugBold, PlugBold as PlugBoldIcon, PlugBold as SiPlugBold };
export type { PlugBoldProps };
