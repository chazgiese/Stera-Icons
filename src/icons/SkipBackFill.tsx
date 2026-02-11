import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackFillProps = Omit<IconBaseProps, 'children'>;

const SkipBackFill = memo(
  forwardRef<SVGSVGElement, SkipBackFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-back-fill" {...props}>
      <path d="M18.62 3.87a2 2 0 0 1 1.47.8c.28.36.35.78.38 1.1q.04.51.03 1.22V17q0 .7-.03 1.22c-.03.32-.1.74-.38 1.1a2 2 0 0 1-1.47.8c-.46.03-.85-.15-1.13-.3q-.45-.25-1.03-.66L9.44 14.5q-.61-.4-1.03-.73c-.27-.22-.57-.5-.74-.9a2.3 2.3 0 0 1-.07-1.52l.07-.21.07-.15c.18-.33.43-.57.67-.76q.42-.33 1.03-.73l7.02-4.67q.58-.4 1.03-.65c.25-.14.58-.3.96-.3zM4.5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SkipBackFill.displayName = 'SkipBackFill';

// Triple export pattern (lucide-react style)
export { SkipBackFill, SkipBackFill as SkipBackFillIcon, SkipBackFill as SiSkipBackFill };
export default SkipBackFill;
export type { SkipBackFillProps };
