import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AccessibilityBoldProps = Omit<IconBaseProps, 'children'>;

const AccessibilityBold = memo(
  forwardRef<SVGSVGElement, AccessibilityBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="accessibility-bold" {...props}>
      <path fill="currentColor" d="M19.76 6.53a1 1 0 0 1 .48 1.94c-2.09.52-3.95.87-5.74 1.03v4.35l.01.1 1.47 7.35.02.1a1 1 0 0 1-1.98.3l-1.26-6.3a.5.5 0 0 0-.4-.4h-.63a.5.5 0 0 0-.5.4l-1.25 6.3A1 1 0 0 1 8 21.4l.02-.1 1.47-7.35.01-.1V9.5a38 38 0 0 1-5.74-1.03 1 1 0 1 1 .48-1.94c5.84 1.46 9.68 1.46 15.52 0" />
        <path fill="currentColor" d="M12 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

AccessibilityBold.displayName = 'AccessibilityBold';

// Triple export pattern (lucide-react style)
export { AccessibilityBold, AccessibilityBold as AccessibilityBoldIcon, AccessibilityBold as SiAccessibilityBold };
export default AccessibilityBold;
export type { AccessibilityBoldProps };
