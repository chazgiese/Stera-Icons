import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type IdHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdHFillDuotone = memo(
  forwardRef<SVGSVGElement, IdHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM8.33 7.5a3 3 0 0 0-1.78 5.41 4 4 0 0 0-2 2.26 1 1 0 0 0 .95 1.33h5.66a1 1 0 0 0 .94-1.33 4 4 0 0 0-2-2.26A3 3 0 0 0 8.33 7.5M15 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.33 7.5a3 3 0 0 1 1.77 5.41 4 4 0 0 1 2 2.26 1 1 0 0 1-.94 1.33H5.5a1 1 0 0 1-.94-1.33 4 4 0 0 1 2-2.26A3 3 0 0 1 8.33 7.5M19 13a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2zM19 9a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

IdHFillDuotone.displayName = 'IdHFillDuotone';

export { IdHFillDuotone };
export type { IdHFillDuotoneProps };
