import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlugRegularProps = Omit<IconBaseProps, 'children'>;

const PlugRegular = memo(
  forwardRef<SVGSVGElement, PlugRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.1 10.77a2 2 0 0 1 2.78.05l5.3 5.3a2 2 0 0 1 .05 2.77l-.15.16-.01.02a5.75 5.75 0 0 1-7.57.5l-2.97 2.96a.75.75 0 1 1-1.06-1.06l2.97-2.97a5.75 5.75 0 0 1 .5-7.57l.01-.01zm1.72 1.11a.5.5 0 0 0-.7 0l-.14.13A4.25 4.25 0 0 0 12 18l.13-.14a.5.5 0 0 0-.01-.7zM21.47 1.47a.75.75 0 0 1 1.06 1.06L19.56 5.5a5.75 5.75 0 0 1-.5 7.57l-.01.02-.16.14a2 2 0 0 1-2.77-.05l-.62-.62-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.94-1.94-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-.62-.62a2 2 0 0 1-.05-2.77l.15-.16.01-.02a5.75 5.75 0 0 1 7.57-.49zM18.01 6a4.25 4.25 0 0 0-6-.01l-.14.14a.5.5 0 0 0 .01.7l4.14 4.13.01.01 1.15 1.15c.19.19.5.2.7.01L18 12a4.25 4.25 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugRegular.displayName = 'PlugRegular';

export { PlugRegular };
export type { PlugRegularProps };
