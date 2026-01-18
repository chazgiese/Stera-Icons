import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReceiptAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ReceiptAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V20a1 1 0 0 1-1.47.88l-3.24-1.72-2.63 1.68a1 1 0 0 1-1.07 0L12 19.2l-2.59 1.65a1 1 0 0 1-1.07 0L5.7 19.16l-3.23 1.72A1 1 0 0 1 1 20V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3zM6.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 8.8v9.53l2.28-1.21a1 1 0 0 1 1 .04l2.6 1.65 2.58-1.65.13-.07a1 1 0 0 1 .95.07l2.59 1.65 2.58-1.65.12-.07a1 1 0 0 1 .9.03L21 18.33V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17 12a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM17 8a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ReceiptAltBoldDuotone.displayName = 'ReceiptAltBoldDuotone';

export { ReceiptAltBoldDuotone };
export type { ReceiptAltBoldDuotoneProps };
