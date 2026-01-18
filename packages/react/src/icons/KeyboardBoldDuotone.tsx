import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyboardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyboardBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyboardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-2.85V8a3 3 0 0 1 3-3zM4 7a1 1 0 0 0-1 1v8.1a1 1 0 0 0 1 .9h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.5 13a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM14.25 13a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2zM18.1 13a1 1 0 0 1 0 2h-.6a1 1 0 1 1 0-2h.6M6.5 9a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zM10.25 9a1 1 0 1 1 0 2h-.5a1 1 0 1 1 0-2zM14.25 9a1 1 0 0 1 0 2h-.5a1 1 0 1 1 0-2zM18 9a1 1 0 0 1 0 2h-.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

KeyboardBoldDuotone.displayName = 'KeyboardBoldDuotone';

// Triple export pattern (lucide-react style)
export { KeyboardBoldDuotone, KeyboardBoldDuotone as KeyboardBoldDuotoneIcon, KeyboardBoldDuotone as SiKeyboardBoldDuotone };
export type { KeyboardBoldDuotoneProps };
