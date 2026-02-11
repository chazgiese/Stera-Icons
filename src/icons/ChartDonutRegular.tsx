import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartDonutRegularProps = Omit<IconBaseProps, 'children'>;

const ChartDonutRegular = memo(
  forwardRef<SVGSVGElement, ChartDonutRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-donut" {...props}>
      <path fillRule="evenodd" d="m12 2.25.44.01h.14q.17.02.34.03l.11.01a10 10 0 0 1 2.46.6l.05.01q.45.19.9.4l.07.05.28.15.03.02a10 10 0 0 1 1.28.86l.14.12.04.03.53.48.03.04.14.14.15.15.13.15.22.25.05.05v.01l.23.29.02.02.11.15.25.37.1.14q.24.39.44.78l.04.08a10 10 0 0 1 .63 1.6l.03.1a10 10 0 0 1 .3 1.54l.02.15q.02.2.03.41v.1l.02.38v.13l-.01.42v.12a10 10 0 0 1-1.26 4.22l-.06.1-.25.4-.12.2-.13.18-.13.18-.53.63-.07.08-.3.31-.21.21-.1.09-.04.04-.31.27-.08.06a10 10 0 0 1-.78.58l-.2.13-.16.1-.47.26-.14.07-.35.17-.14.06q-1.02.45-2.16.66l-.13.02-.57.08-.14.02-.35.02h-.07l-.43.02h-.11a10 10 0 0 1-.9-.05h-.06l-.58-.08-.15-.03-.42-.08-.07-.02a10 10 0 0 1-1.44-.46l-.22-.09-.08-.04-.4-.19-.13-.06-.35-.2-.13-.07-.4-.25-.1-.06a10 10 0 0 1-1.06-.84l-.03-.02-.31-.3-.04-.04-.26-.27-.06-.07q-.15-.15-.27-.32l-.05-.05-.23-.3-.04-.04-.22-.32-.08-.12a10 10 0 0 1-1.08-2.2l-.03-.07-.07-.21-.09-.3v-.02a10 10 0 0 1-.35-2.54v-.06l.01-.47v-.07l.04-.4q0-.07.02-.16l.11-.76.05-.23.03-.11.12-.5.02-.03q.25-.84.63-1.62l.04-.07.4-.7.01-.03.16-.25.11-.16.1-.14.13-.18.22-.27.08-.1.2-.22.07-.09.28-.28.03-.03.12-.13.51-.46.1-.08.61-.46.16-.1.48-.3.1-.06a10 10 0 0 1 1.26-.6l.06-.02q.4-.16.8-.27l.05-.02.8-.19q.1 0 .17-.03l.62-.08.08-.01.42-.03h.12q.21-.03.43-.02m-.79 1.54a8.25 8.25 0 1 0 6.07 14.55l-2.78-2.78a4.35 4.35 0 1 1-3.25-7.84V3.79zm5.03 7.26a4.4 4.4 0 0 1-.68 3.45l2.78 2.78a8.3 8.3 0 0 0 1.54-7.73zM12 9.15a2.85 2.85 0 1 0 1.89 4.99l.13-.12A2.85 2.85 0 0 0 12 9.15m.75-1.43a4.4 4.4 0 0 1 2.11 1l.09.08a4 4 0 0 1 .72.87l3.63-1.5a8 8 0 0 0-1.75-2.27l-.05-.05a8.2 8.2 0 0 0-4.75-2.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartDonutRegular.displayName = 'ChartDonutRegular';

// Triple export pattern (lucide-react style)
export { ChartDonutRegular, ChartDonutRegular as ChartDonutRegularIcon, ChartDonutRegular as SiChartDonutRegular };
export default ChartDonutRegular;
export type { ChartDonutRegularProps };
