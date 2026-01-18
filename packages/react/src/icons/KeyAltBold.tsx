import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyAltBoldProps = Omit<IconBaseProps, 'children'>;

const KeyAltBold = memo(
  forwardRef<SVGSVGElement, KeyAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M17 6a6 6 0 1 1-5.2 9H9.91l-1.2 1.2a1 1 0 0 1-1.51-.1l-.8-1.08-.7.69a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 0-1.42l2-2A1 1 0 0 1 4 9h7.8A6 6 0 0 1 17 6m0 2a4 4 0 0 0-3.67 2.4 1 1 0 0 1-.91.6h-8l-1 1L5 13.59l.8-.8a1 1 0 0 1 1.5.11l.8 1.08.7-.69a1 1 0 0 1 .7-.29h2.92a1 1 0 0 1 .91.6A4 4 0 1 0 17 8" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyAltBold.displayName = 'KeyAltBold';

export { KeyAltBold };
export type { KeyAltBoldProps };
