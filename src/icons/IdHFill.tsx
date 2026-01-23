import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdHFillProps = Omit<IconBaseProps, 'children'>;

const IdHFill = memo(
  forwardRef<SVGSVGElement, IdHFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-h-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM8.33 7.5a3 3 0 0 0-1.78 5.41 4 4 0 0 0-2 2.26 1 1 0 0 0 .95 1.33h5.66a1 1 0 0 0 .94-1.33 4 4 0 0 0-2-2.26A3 3 0 0 0 8.33 7.5M15 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

IdHFill.displayName = 'IdHFill';

// Triple export pattern (lucide-react style)
export { IdHFill, IdHFill as IdHFillIcon, IdHFill as SiIdHFill };
export default IdHFill;
export type { IdHFillProps };
