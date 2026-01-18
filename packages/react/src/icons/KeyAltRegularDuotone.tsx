import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 6.25a5.75 5.75 0 1 1-5.05 8.5H9.81l-1.28 1.28a.75.75 0 0 1-1.13-.08l-.98-1.3-.89.88c-.3.3-.77.3-1.06 0l-3-3a.75.75 0 0 1 0-1.06l2-2A.8.8 0 0 1 4 9.25h7.95c.98-1.79 2.87-3 5.05-3m0 1.5a4.3 4.3 0 0 0-3.9 2.55.8.8 0 0 1-.68.45H4.3L3.06 12 5 13.94l.97-.97a.75.75 0 0 1 1.13.08l.98 1.3.89-.88a.8.8 0 0 1 .53-.22h2.92c.3 0 .56.18.68.45A4.25 4.25 0 1 0 17 7.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

KeyAltRegularDuotone.displayName = 'KeyAltRegularDuotone';

export { KeyAltRegularDuotone };
export type { KeyAltRegularDuotoneProps };
