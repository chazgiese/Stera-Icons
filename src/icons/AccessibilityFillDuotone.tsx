import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AccessibilityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AccessibilityFillDuotone = memo(
  forwardRef<SVGSVGElement, AccessibilityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="accessibility-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 1.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
        <path fill="currentColor" d="M2.55 6.89a1.5 1.5 0 0 1 1.81-1.1c5.77 1.44 9.52 1.44 15.28 0a1.5 1.5 0 0 1 .72 2.91 40 40 0 0 1-5.36 1v3.9l1.47 7.36a1.5 1.5 0 0 1-2.94.58l-1.26-6.29h-.54l-1.26 6.3a1.5 1.5 0 1 1-2.94-.6L9 13.6V9.7a40 40 0 0 1-5.36-1 1.5 1.5 0 0 1-1.1-1.81" opacity={.4} />
    </IconBase>
  ))
);

AccessibilityFillDuotone.displayName = 'AccessibilityFillDuotone';

// Triple export pattern (lucide-react style)
export { AccessibilityFillDuotone, AccessibilityFillDuotone as AccessibilityFillDuotoneIcon, AccessibilityFillDuotone as SiAccessibilityFillDuotone };
export type { AccessibilityFillDuotoneProps };
