import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AccessibilityFillProps = Omit<IconBaseProps, 'children'>;

const AccessibilityFill = memo(
  forwardRef<SVGSVGElement, AccessibilityFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="accessibility-fill" {...props}>
      <path fill="currentColor" d="M19.64 5.8a1.5 1.5 0 0 1 .72 2.9 40 40 0 0 1-5.36 1v3.9l1.47 7.36a1.5 1.5 0 0 1-2.94.58l-1.26-6.29h-.54l-1.26 6.3a1.5 1.5 0 0 1-2.94-.6L9 13.6V9.7a40 40 0 0 1-5.36-1 1.5 1.5 0 0 1 .72-2.9c5.76 1.44 9.52 1.44 15.28 0" />
        <path fill="currentColor" d="M12 1.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

AccessibilityFill.displayName = 'AccessibilityFill';

// Triple export pattern (lucide-react style)
export { AccessibilityFill, AccessibilityFill as AccessibilityFillIcon, AccessibilityFill as SiAccessibilityFill };
export default AccessibilityFill;
export type { AccessibilityFillProps };
