import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GiftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftRegularDuotone = memo(
  forwardRef<SVGSVGElement, GiftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gift-duotone" {...props}>
      <path d="M20.75 17.8q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H7.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2q-.24-.51-.27-1.08-.04-.55-.03-1.37v-4.07q.33.03.75.02h.75v4.05q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h4.05v-6.5h1.5v6.5h4.05q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-4.05H20q.42 0 .75-.02z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.51 1.27c.84-.1 1.66.2 2.34.88s.98 1.5.88 2.34c-.09.82-.53 1.56-1.14 2.18q-.3.3-.69.58H7.1a6 6 0 0 1-.69-.58 3.7 3.7 0 0 1-1.14-2.18c-.1-.84.2-1.66.88-2.34s1.5-.98 2.34-.88c.82.09 1.56.53 2.18 1.14q.8.8 1.33 2 .53-1.2 1.33-2a3.7 3.7 0 0 1 2.18-1.14M8.32 2.76c-.35-.04-.73.06-1.11.45-.39.38-.5.76-.45 1.11q.05.59.71 1.29a6.3 6.3 0 0 0 3.74 1.6 6.3 6.3 0 0 0-1.6-3.74q-.69-.66-1.29-.71m7.36 0q-.6.05-1.29.71a6.3 6.3 0 0 0-1.6 3.74 6.3 6.3 0 0 0 3.74-1.6q.66-.7.71-1.29c.04-.35-.06-.73-.45-1.11-.38-.39-.76-.5-1.11-.45" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20 7.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v1q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02H4q-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88v-1q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02zM4 8.75l-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.15.22.22l.22.04.76.01h7.25v-3.5zm8.75 3.5H20l.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22.01-.76v-1l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L20 8.75h-7.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftRegularDuotone.displayName = 'GiftRegularDuotone';

// Triple export pattern (lucide-react style)
export { GiftRegularDuotone, GiftRegularDuotone as GiftRegularDuotoneIcon, GiftRegularDuotone as SiGiftRegularDuotone };
export type { GiftRegularDuotoneProps };
