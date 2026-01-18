import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BirdhouseRegularProps = Omit<IconBaseProps, 'children'>;

const BirdhouseRegular = memo(
  forwardRef<SVGSVGElement, BirdhouseRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 9.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M10.5 3.33a2.25 2.25 0 0 1 3 0l8 7.11a.75.75 0 0 1-1 1.12l-.97-.86-1.62 8.55H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.1L4.46 10.7l-.97.86a.75.75 0 0 1-1-1.12zm2 1.12a.75.75 0 0 0-1 0L5.77 9.54l1.85 9.71h8.76l1.85-9.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseRegular.displayName = 'BirdhouseRegular';

// Triple export pattern (lucide-react style)
export { BirdhouseRegular, BirdhouseRegular as BirdhouseRegularIcon, BirdhouseRegular as SiBirdhouseRegular };
export type { BirdhouseRegularProps };
