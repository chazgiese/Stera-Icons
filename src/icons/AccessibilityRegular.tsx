import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AccessibilityRegularProps = Omit<IconBaseProps, 'children'>;

const AccessibilityRegular = memo(
  forwardRef<SVGSVGElement, AccessibilityRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="accessibility" {...props}>
      <path fill="currentColor" d="M19.82 6.77a.75.75 0 0 1 .36 1.46c-2.17.54-4.09.89-5.93 1.05v4.65l1.49 7.42a.75.75 0 0 1-1.48.3L13 15.35a.75.75 0 0 0-.73-.6h-.54a.75.75 0 0 0-.73.6l-1.26 6.3a.75.75 0 0 1-1.48-.3l1.49-7.42V9.28c-1.85-.16-3.76-.51-5.93-1.05a.75.75 0 0 1 .36-1.46c5.88 1.47 9.76 1.47 15.64 0M12 1.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" />
    </IconBase>
  ))
);

AccessibilityRegular.displayName = 'AccessibilityRegular';

// Triple export pattern (lucide-react style)
export { AccessibilityRegular, AccessibilityRegular as AccessibilityRegularIcon, AccessibilityRegular as SiAccessibilityRegular };
export type { AccessibilityRegularProps };
