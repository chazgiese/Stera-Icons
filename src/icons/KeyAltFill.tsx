import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyAltFillProps = Omit<IconBaseProps, 'children'>;

const KeyAltFill = memo(
  forwardRef<SVGSVGElement, KeyAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="key-alt-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 6.5a5.5 5.5 0 1 1-4.9 8H9.7l-1.75 1.76-.35-.46-1.15-1.54L5 15.71 1.3 12l2.5-2.5h8.3a5.5 5.5 0 0 1 4.9-3m1.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyAltFill.displayName = 'KeyAltFill';

// Triple export pattern (lucide-react style)
export { KeyAltFill, KeyAltFill as KeyAltFillIcon, KeyAltFill as SiKeyAltFill };
export type { KeyAltFillProps };
