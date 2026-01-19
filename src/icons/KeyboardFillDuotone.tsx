import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyboardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyboardFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyboardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyboard-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 5.5A2.5 2.5 0 0 1 22.5 8v8a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.49-2.24L1.5 16V8A2.5 2.5 0 0 1 4 5.5zM6 13a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2zm3.75 0a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2zm7.75 0a1 1 0 1 0 0 2h.6a1 1 0 0 0 0-2h-.6M6 9a1 1 0 0 0 0 2h.5a1 1 0 1 0 0-2zm3.75 0a1 1 0 0 0 0 2h.5a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.5a1 1 0 0 0 0-2zm3.75 0a1 1 0 1 0 0 2h.5a1 1 0 0 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.5 13a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM14.25 13a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2zM18.1 13a1 1 0 0 1 0 2h-.6a1 1 0 1 1 0-2h.6M6.5 9a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zM10.25 9a1 1 0 1 1 0 2h-.5a1 1 0 1 1 0-2zM14.25 9a1 1 0 0 1 0 2h-.5a1 1 0 1 1 0-2zM18 9a1 1 0 0 1 0 2h-.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

KeyboardFillDuotone.displayName = 'KeyboardFillDuotone';

// Triple export pattern (lucide-react style)
export { KeyboardFillDuotone, KeyboardFillDuotone as KeyboardFillDuotoneIcon, KeyboardFillDuotone as SiKeyboardFillDuotone };
export type { KeyboardFillDuotoneProps };
