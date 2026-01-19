import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TargetFillProps = Omit<IconBaseProps, 'children'>;

const TargetFill = memo(
  forwardRef<SVGSVGElement, TargetFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFill.displayName = 'TargetFill';

// Triple export pattern (lucide-react style)
export { TargetFill, TargetFill as TargetFillIcon, TargetFill as SiTargetFill };
export type { TargetFillProps };
