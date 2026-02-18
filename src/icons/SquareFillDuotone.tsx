import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-fill-duotone" {...props}>
      <path d="M12.5 4.38c1.41 0 2.42 0 3.21.06.78.06 1.27.19 1.66.38.78.4 1.41 1.03 1.8 1.8.2.4.33.89.39 1.67.06.79.07 1.8.07 3.21v1c0 1.41 0 2.42-.07 3.21a4 4 0 0 1-.38 1.66c-.4.78-1.03 1.41-1.8 1.8-.4.2-.89.33-1.67.39-.79.06-1.8.07-3.21.07h-1c-1.41 0-2.42 0-3.21-.07a4 4 0 0 1-1.66-.38 4 4 0 0 1-1.8-1.8c-.2-.4-.33-.89-.39-1.67-.06-.79-.07-1.8-.07-3.21v-1c0-1.41 0-2.42.07-3.21.06-.78.19-1.27.38-1.66.4-.78 1.03-1.41 1.8-1.8.4-.2.89-.33 1.67-.39.79-.06 1.8-.07 3.21-.07z" opacity={.4} />
        <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1 1.75c-1.41 0-2.42 0-3.21.06-.78.06-1.27.19-1.66.38-.78.4-1.41 1.03-1.8 1.8-.2.4-.33.89-.39 1.67-.06.79-.07 1.8-.07 3.21v1c0 1.41 0 2.42.07 3.21.06.78.19 1.27.38 1.66.4.78 1.03 1.41 1.8 1.8.4.2.89.33 1.67.39.79.06 1.8.07 3.21.07h1c1.41 0 2.42 0 3.21-.07a4 4 0 0 0 1.66-.38c.78-.4 1.41-1.03 1.8-1.8.2-.4.33-.89.39-1.67.06-.79.07-1.8.07-3.21v-1c0-1.41 0-2.42-.07-3.21a4 4 0 0 0-.38-1.66 4 4 0 0 0-1.8-1.8c-.4-.2-.89-.33-1.67-.39-.79-.06-1.8-.07-3.21-.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquareFillDuotone.displayName = 'SquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SquareFillDuotone, SquareFillDuotone as SquareFillDuotoneIcon, SquareFillDuotone as SiSquareFillDuotone };
export default SquareFillDuotone;
export type { SquareFillDuotoneProps };
