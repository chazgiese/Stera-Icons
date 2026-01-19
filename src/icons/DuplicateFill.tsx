import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DuplicateFillProps = Omit<IconBaseProps, 'children'>;

const DuplicateFill = memo(
  forwardRef<SVGSVGElement, DuplicateFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="duplicate-fill" {...props}>
      <path fill="currentColor" d="M15.5 20a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2zM7.9 18.04a1 1 0 0 1 1.24.67q.03.11.08.2a2 2 0 0 0 1.07.95 1 1 0 1 1-.58 1.91 4 4 0 0 1-2.48-2.48 1 1 0 0 1 .66-1.25M19.86 18.71a1 1 0 0 1 1.91.58 4 4 0 0 1-2.48 2.48 1 1 0 0 1-.58-1.91q.11-.03.2-.08a2 2 0 0 0 .95-1.07" />
        <path fill="currentColor" fillRule="evenodd" d="M11.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57Q17 6.29 17 7h-3.5a1 1 0 1 0 0 2H17v2.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9v-3.5a1 1 0 1 0-2 0V17q-.72 0-1.25-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 12.43 2 11.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 2 7.8 2zm-.24 5.9a1 1 0 0 0-1.25-.67A4 4 0 0 0 7.23 9.7a1 1 0 0 0 1.91.58q.03-.12.08-.2a2 2 0 0 1 1.07-.95 1 1 0 0 0 .67-1.25" clipRule="evenodd" />
        <path fill="currentColor" d="M21 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M18.04 7.9a1 1 0 0 1 1.25-.67q.27.08.53.2a4 4 0 0 1 1.95 2.28 1 1 0 1 1-1.91.58l-.08-.2a2 2 0 0 0-1.07-.95 1 1 0 0 1-.67-1.25" />
    </IconBase>
  ))
);

DuplicateFill.displayName = 'DuplicateFill';

// Triple export pattern (lucide-react style)
export { DuplicateFill, DuplicateFill as DuplicateFillIcon, DuplicateFill as SiDuplicateFill };
export default DuplicateFill;
export type { DuplicateFillProps };
