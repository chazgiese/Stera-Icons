import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicateBoldProps = Omit<IconBaseProps, 'children'>;

const DuplicateBold = memo(
  forwardRef<SVGSVGElement, DuplicateBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="duplicate-bold" {...props}>
      <path fill="currentColor" d="M15.5 20a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zM7.9 18.04a1 1 0 0 1 1.24.67q.03.11.08.2a2 2 0 0 0 1.07.95 1 1 0 0 1-.58 1.91 4 4 0 0 1-2.48-2.48 1 1 0 0 1 .66-1.25M19.86 18.71a1 1 0 0 1 1.91.58 4 4 0 0 1-2.48 2.48 1 1 0 1 1-.58-1.91q.11-.03.2-.08a2 2 0 0 0 .95-1.07M11 2c.88 0 1.47 0 1.98.1a5 5 0 0 1 3.92 3.92c.1.51.1 1.1.1 1.98a1 1 0 0 1-1 1h-2.5a1 1 0 0 1 0-2H15c-.02-.28-.03-.44-.06-.59a3 3 0 0 0-2.35-2.35A10 10 0 0 0 11 4H9.4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 7.47 4 8.26 4 9.4V11c0 .98 0 1.32.06 1.58A3 3 0 0 0 7 15V13.5a1 1 0 0 1 2 0V16a1 1 0 0 1-1 1c-.88 0-1.47 0-1.98-.1a5 5 0 0 1-3.92-3.92C2 12.47 2 11.88 2 11V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.2-2.19c.58-.3 1.22-.42 1.95-.48Q7.75 1.98 9.4 2zM21 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M9.71 7.23a1 1 0 0 1 .58 1.91l-.2.08a2 2 0 0 0-.95 1.07 1 1 0 0 1-1.91-.58q.08-.27.2-.53a4 4 0 0 1 2.28-1.95M18.04 7.9a1 1 0 0 1 1.25-.67q.27.08.53.2a4 4 0 0 1 1.95 2.28 1 1 0 0 1-1.91.58l-.08-.2a2 2 0 0 0-1.07-.95 1 1 0 0 1-.67-1.25" />
    </IconBase>
  ))
);

DuplicateBold.displayName = 'DuplicateBold';

// Triple export pattern (lucide-react style)
export { DuplicateBold, DuplicateBold as DuplicateBoldIcon, DuplicateBold as SiDuplicateBold };
export default DuplicateBold;
export type { DuplicateBoldProps };
