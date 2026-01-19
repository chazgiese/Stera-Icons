import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchwayRegularProps = Omit<IconBaseProps, 'children'>;

const ArchwayRegular = memo(
  forwardRef<SVGSVGElement, ArchwayRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v9A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19v-9A8.75 8.75 0 0 1 12 1.25m0 1.5C8 2.75 4.75 6 4.75 10v9c0 1.24 1 2.25 2.25 2.25h10c1.24 0 2.25-1 2.25-2.25v-9c0-4-3.25-7.25-7.25-7.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayRegular.displayName = 'ArchwayRegular';

// Triple export pattern (lucide-react style)
export { ArchwayRegular, ArchwayRegular as ArchwayRegularIcon, ArchwayRegular as SiArchwayRegular };
export type { ArchwayRegularProps };
