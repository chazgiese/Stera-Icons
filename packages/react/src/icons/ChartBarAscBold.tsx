import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarAscBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscBold = memo(
  forwardRef<SVGSVGElement, ChartBarAscBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.75 3C20.99 3 22 4 22 5.25V19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2v-5.75C2 12.01 3 11 4.25 11h3.5l.25.01V9.25C8 8.01 9 7 10.25 7h3.5l.25.01V5.25C14 4.01 15 3 16.25 3zM4.25 13a.25.25 0 0 0-.25.25V19h4v-5.75a.25.25 0 0 0-.25-.25zm6-4a.25.25 0 0 0-.25.25V19h4V9.25a.25.25 0 0 0-.25-.25zm6-4a.25.25 0 0 0-.25.25V19h4V5.25a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarAscBold.displayName = 'ChartBarAscBold';

export { ChartBarAscBold };
export type { ChartBarAscBoldProps };
