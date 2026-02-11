import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyboardFillProps = Omit<IconBaseProps, 'children'>;

const KeyboardFill = memo(
  forwardRef<SVGSVGElement, KeyboardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyboard-fill" {...props}>
      <path fillRule="evenodd" d="M20 5.5A2.5 2.5 0 0 1 22.5 8v8a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.49-2.24L1.5 16V8A2.5 2.5 0 0 1 4 5.5zM6 13a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2zm3.75 0a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2zm7.75 0a1 1 0 1 0 0 2h.6a1 1 0 0 0 0-2h-.6M6 9a1 1 0 0 0 0 2h.5a1 1 0 1 0 0-2zm3.75 0a1 1 0 0 0 0 2h.5a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h.5a1 1 0 0 0 0-2zm3.75 0a1 1 0 1 0 0 2h.5a1 1 0 0 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyboardFill.displayName = 'KeyboardFill';

// Triple export pattern (lucide-react style)
export { KeyboardFill, KeyboardFill as KeyboardFillIcon, KeyboardFill as SiKeyboardFill };
export default KeyboardFill;
export type { KeyboardFillProps };
