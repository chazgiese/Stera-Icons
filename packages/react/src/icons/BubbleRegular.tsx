import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BubbleRegularProps = Omit<IconBaseProps, 'children'>;

const BubbleRegular = memo(
  forwardRef<SVGSVGElement, BubbleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.81 4.97q.46-.09.84.17c.24.17.4.45.46.76.05.3-.02.62-.19.86q-.27.38-.73.43l-.3.04a5.1 5.1 0 0 0-4.07 3.9.8.8 0 0 1-.32.45.8.8 0 0 1-.54.12.8.8 0 0 1-.47-.29.8.8 0 0 1-.15-.53l.07-.42a7 7 0 0 1 5.4-5.49" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleRegular.displayName = 'BubbleRegular';

export { BubbleRegular };
export type { BubbleRegularProps };
