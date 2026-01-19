import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FastForwardRegularProps = Omit<IconBaseProps, 'children'>;

const FastForwardRegular = memo(
  forwardRef<SVGSVGElement, FastForwardRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="fast-forward" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.72 6.02c.32 0 .6.11.85.23q.4.2.99.56L20.85 10q.55.31.92.58c.2.15.43.34.58.61l.06.12.06.17c.13.4.11.84-.06 1.23-.14.33-.4.56-.64.73q-.37.27-.92.58l-5.3 3.18q-.57.36-.98.56c-.28.13-.61.26-.98.23-.5-.05-.95-.3-1.25-.71-.22-.3-.28-.65-.31-.95q-.04-.47-.03-1.15v-2.73q-.03.14-.09.26c-.14.33-.4.56-.64.73q-.37.27-.92.58l-5.3 3.18q-.56.36-.98.56c-.28.13-.61.26-.98.23-.5-.05-.95-.3-1.25-.71-.22-.3-.28-.65-.31-.95q-.04-.47-.03-1.15V8.83q0-.68.03-1.15c.03-.3.09-.65.31-.95l.12-.14c.29-.32.7-.53 1.13-.57h.13c.32 0 .6.11.85.23q.4.2.99.56L10.35 10q.55.31.92.58c.2.15.43.34.58.61l.06.12.06.17.03.1V8.83q0-.68.03-1.15c.03-.3.09-.65.31-.95l.12-.14c.29-.32.7-.53 1.13-.57zm-10.5 1.5a.3.3 0 0 0-.16.09q-.02.02-.04.21-.03.31-.02 1v6.35a13 13 0 0 0 .06 1.22q.07.07.15.09.03 0 .2-.08.28-.14.88-.5l5.29-3.17a12 12 0 0 0 .96-.64.3.3 0 0 0 0-.18l-.16-.13-.8-.5-5.3-3.18a13 13 0 0 0-1.07-.58m10.5 0a.3.3 0 0 0-.16.09q-.02.02-.04.21-.02.31-.02 1v6.35a13 13 0 0 0 .06 1.22q.07.07.15.09.02 0 .2-.08.28-.14.88-.5l5.29-3.17a12 12 0 0 0 .96-.64.3.3 0 0 0 0-.18l-.16-.13-.8-.5-5.3-3.18a13 13 0 0 0-1.07-.58" clipRule="evenodd" />
    </IconBase>
  ))
);

FastForwardRegular.displayName = 'FastForwardRegular';

// Triple export pattern (lucide-react style)
export { FastForwardRegular, FastForwardRegular as FastForwardRegularIcon, FastForwardRegular as SiFastForwardRegular };
export type { FastForwardRegularProps };
