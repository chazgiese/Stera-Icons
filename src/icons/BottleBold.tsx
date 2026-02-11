import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleBoldProps = Omit<IconBaseProps, 'children'>;

const BottleBold = memo(
  forwardRef<SVGSVGElement, BottleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-bold" {...props}>
      <path fillRule="evenodd" d="M14.25 2a1 1 0 0 1 .34 1.94l.01.1.34 3.77q.04.3.22.53l1.18 1.49A3 3 0 0 1 17 11.7V19a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-7.3a3 3 0 0 1 .66-1.87l1.18-1.49a1 1 0 0 0 .22-.53l.34-3.76.01-.1A1 1 0 0 1 9.75 2zm-2.6 2q-.23.02-.26.23l-.34 3.76a3 3 0 0 1-.64 1.6l-1.2 1.49a1 1 0 0 0-.21.62V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.3a1 1 0 0 0-.22-.62L13.6 9.59a3 3 0 0 1-.64-1.6l-.34-3.76a.25.25 0 0 0-.25-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

BottleBold.displayName = 'BottleBold';

// Triple export pattern (lucide-react style)
export { BottleBold, BottleBold as BottleBoldIcon, BottleBold as SiBottleBold };
export default BottleBold;
export type { BottleBoldProps };
