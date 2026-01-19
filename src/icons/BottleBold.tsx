import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BottleBoldProps = Omit<IconBaseProps, 'children'>;

const BottleBold = memo(
  forwardRef<SVGSVGElement, BottleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.25 1a1 1 0 0 1 .32 1.95l.02.13.36 4.73q.03.3.22.55l1.17 1.47A3 3 0 0 1 17 11.7V20a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-8.3a3 3 0 0 1 .66-1.87l1.17-1.47a1 1 0 0 0 .22-.55l.36-4.73.02-.13A1 1 0 0 1 9.75 1zm-2.6 2c-.12 0-.23.1-.24.23l-.37 4.73a3 3 0 0 1-.64 1.65l-1.18 1.47a1 1 0 0 0-.22.62V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8.3a1 1 0 0 0-.22-.62L13.6 9.6a3 3 0 0 1-.64-1.65l-.37-4.73a.25.25 0 0 0-.25-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

BottleBold.displayName = 'BottleBold';

// Triple export pattern (lucide-react style)
export { BottleBold, BottleBold as BottleBoldIcon, BottleBold as SiBottleBold };
export type { BottleBoldProps };
