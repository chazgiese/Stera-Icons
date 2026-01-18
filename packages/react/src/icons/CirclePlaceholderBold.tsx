import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBold = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M3.77 8.36a9 9 0 0 0-.73 2.81l9.79 9.8q1.5-.15 2.8-.74zm-.49 5.88a9 9 0 0 0 6.48 6.48zm3.3-9.42q-1 .76-1.76 1.76l12.6 12.6q1-.76 1.76-1.76zm4.59-1.78q-1.5.14-2.8.73l11.86 11.87q.59-1.32.73-2.81zm9.55 6.72a9 9 0 0 0-6.48-6.48z" />
    </IconBase>
  ))
);

CirclePlaceholderBold.displayName = 'CirclePlaceholderBold';

export { CirclePlaceholderBold };
export type { CirclePlaceholderBoldProps };
