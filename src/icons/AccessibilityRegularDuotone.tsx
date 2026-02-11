import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AccessibilityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AccessibilityRegularDuotone = memo(
  forwardRef<SVGSVGElement, AccessibilityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="accessibility-duotone" {...props}>
      <path d="M19.82 6.77a.75.75 0 0 1 .36 1.46c-2.17.54-4.09.89-5.93 1.05v4.65l1.49 7.42a.75.75 0 0 1-1.48.3l-1.25-6.3a.75.75 0 0 0-.74-.6h-.54a.75.75 0 0 0-.74.6l-1.25 6.3a.75.75 0 1 1-1.48-.3l1.49-7.42V9.28c-1.85-.16-3.76-.51-5.93-1.05a.75.75 0 0 1 .36-1.46c5.88 1.47 9.76 1.47 15.64 0" opacity={.4} />
        <path d="M12 1.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" />
    </IconBase>
  ))
);

AccessibilityRegularDuotone.displayName = 'AccessibilityRegularDuotone';

// Triple export pattern (lucide-react style)
export { AccessibilityRegularDuotone, AccessibilityRegularDuotone as AccessibilityRegularDuotoneIcon, AccessibilityRegularDuotone as SiAccessibilityRegularDuotone };
export default AccessibilityRegularDuotone;
export type { AccessibilityRegularDuotoneProps };
