import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TargetRegularProps = Omit<IconBaseProps, 'children'>;

const TargetRegular = memo(
  forwardRef<SVGSVGElement, TargetRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="target" {...props}>
      <path fill="currentColor" d="M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5m0 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetRegular.displayName = 'TargetRegular';

// Triple export pattern (lucide-react style)
export { TargetRegular, TargetRegular as TargetRegularIcon, TargetRegular as SiTargetRegular };
export type { TargetRegularProps };
