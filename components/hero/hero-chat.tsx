'use client';

import { useEffect, useMemo, useState } from 'react';
import ChatComponent, { type ChatConfig, type UiConfig } from '@/components/ui/chat-interface';

const MOBILE_BREAKPOINT = 768;

export function HeroChat() {
  const [containerWidth, setContainerWidth] = useState(550);

  useEffect(() => {
    const updateWidth = () => {
      const viewportPadding = 48;
      const maxWidth = 550;
      setContainerWidth(
        window.innerWidth < MOBILE_BREAKPOINT
          ? Math.min(maxWidth, window.innerWidth - viewportPadding)
          : maxWidth,
      );
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const uiConfig: UiConfig = useMemo(
    () => ({
      containerWidth,
      containerHeight: 420,
      backgroundColor: 'transparent',
      containerClassName: 'bg-transparent',
      autoRestart: true,
      restartDelay: 4000,
      loader: {
        dotColor: '#ffffff',
      },
      linkBubbles: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        iconColor: '#000000',
        borderColor: 'rgba(255,255,255,0.35)',
      },
      leftChat: {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        borderColor: 'rgba(255,255,255,0.4)',
        showBorder: true,
        nameColor: '#ffffff',
      },
      rightChat: {
        backgroundColor: '#000000',
        textColor: '#ffffff',
        borderColor: '#000000',
        showBorder: false,
        nameColor: '#ffffff',
      },
    }),
    [containerWidth],
  );

  const chatConfig: ChatConfig = useMemo(
    () => ({
      leftPerson: {
        name: 'Maya',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face',
      },
      rightPerson: {
        name: 'Lucy-AI',
        avatar:
          '/LucyLogo.png',
      },
      messages: [
        {
          id: 1,
          sender: 'left',
          type: 'text',
          content: 'Hi! Max has been scratching a lot this week. Help me understand what is going on.',
          maxWidth: 'max-w-sm',
          loader: { enabled: true, delay: 800, duration: 1400 },
        },
        {
          id: 2,
          sender: 'right',
          type: 'text',
          content:
            'Absolutely — Did he eat anything unusual or anything that he is allergic to and can you share a photo?',
          loader: { enabled: true, delay: 3200, duration: 1200 },
        },
        {
          id: 3,
          sender: 'left',
          type: 'text-with-links',
          content: 'Perfect, I have a photo from yesterday.',
          maxWidth: 'max-w-xs',
          links: [{ text: 'Pet profile' }, { text: 'Symptom log' }],
          loader: { enabled: true, delay: 5200, duration: 1500 },
        },
        {
          id: 4,
          sender: 'left',
          type: 'image',
          content:
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
          loader: { enabled: false, delay: 7200, duration: 1200 },
        },
        {
          id: 5,
          sender: 'right',
          type: 'text',
          content: 'Thanks, Maya - Let me know if you have any other questions.',
          loader: { enabled: true, delay: 9000, duration: 1100 },
        },
      ],
    }),
    [],
  );

  return <ChatComponent config={chatConfig} uiConfig={uiConfig} />;
}
