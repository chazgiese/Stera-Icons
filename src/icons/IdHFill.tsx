import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdHFillProps = Omit<IconBaseProps, 'children'>;

const IdHFill = memo(
  forwardRef<SVGSVGElement, IdHFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-h-fill" {...props}>
      <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM9 8a2.5 2.5 0 0 0-1.67 4.36c-.78.36-1.42.96-1.75 1.76a1 1 0 0 0 .92 1.38h5a1 1 0 0 0 .92-1.38c-.33-.8-.97-1.4-1.75-1.76A2.49 2.49 0 0 0 9 8m6 5.13a.88.88 0 0 0 0 1.74h2.5a.87.87 0 1 0 0-1.74zm0-4a.88.88 0 0 0 0 1.74h2.5a.87.87 0 1 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

IdHFill.displayName = 'IdHFill';

// Triple export pattern (lucide-react style)
export { IdHFill, IdHFill as IdHFillIcon, IdHFill as SiIdHFill };
export default IdHFill;
export type { IdHFillProps };
