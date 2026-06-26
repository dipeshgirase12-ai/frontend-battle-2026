import { BentoItem } from '@/types';

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'data-processing',
    title: 'Intelligent Data Processing',
    description: 'Automatically extract, transform, and load data from any source with AI-powered precision and real-time validation.',
    icon: 'cube-16-solid',
    gradient: 'from-indigo-600 to-blue-500',
    span: 'xl',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Design complex multi-step automation pipelines with a visual editor. No coding required for standard operations.',
    icon: 'arrow-path',
    gradient: 'from-emerald-600 to-teal-500',
    span: 'md',
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    description: 'Leverage ML models to forecast trends, detect anomalies, and generate actionable insights from your data streams.',
    icon: 'chart-pie',
    gradient: 'from-violet-600 to-purple-500',
    span: 'md',
  },
  {
    id: 'integration',
    title: 'Seamless Integrations',
    description: 'Connect with 200+ tools and platforms through our universal API. Slack, Salesforce, HubSpot, and more.',
    icon: 'link-solid',
    gradient: 'from-amber-600 to-orange-500',
    span: 'sm',
  },
  {
    id: 'monitoring',
    title: 'Real-time Monitoring',
    description: 'Track every automation run with comprehensive dashboards, instant alerts, and detailed execution logs.',
    icon: 'search',
    gradient: 'from-rose-600 to-pink-500',
    span: 'sm',
  },
  {
    id: 'optimization',
    title: 'AI Optimization Engine',
    description: 'Our engine continuously learns from your workflows to suggest optimizations, reducing costs and improving efficiency.',
    icon: 'cog-8-tooth',
    gradient: 'from-cyan-600 to-sky-500',
    span: 'lg',
  },
];