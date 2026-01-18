import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HammerFillProps = Omit<IconBaseProps, 'children'>;

const HammerFill = memo(
  forwardRef<SVGSVGElement, HammerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 2a1 1 0 0 1 .7.3l1 .98 1.35-.67.1-.05A1 1 0 0 1 18 2.5h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-.45-.1l-1.35-.68-1 .99-.16.13.36 8.62a3.4 3.4 0 1 1-6.8 0L9 9c0-.11-.05-.24-.24-.37a2 2 0 0 0-1.06-.3 3.6 3.6 0 0 0-2.92 1.3 1 1 0 0 1-1.76-.82C4.1 3.4 7.47 2 9 2zm-3.9 16.54a1.4 1.4 0 1 0 2.8 0L13.04 10h-2.08z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerFill.displayName = 'HammerFill';

export { HammerFill };
export type { HammerFillProps };
